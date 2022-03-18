import clsx from 'clsx';
import React from 'react';

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

// STYLEME
export default function NumberInput({
  value,
  onUserInput,
  placeholder,
}: {
  value: string;
  onUserInput: (input: string) => void;
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput);
    }
  };

  return (
    <input
      className={clsx(
        'text-base font-medium',
        'trucate',
        'hover:bg-white',
        'tabular-nums',
        'focus:outline-none',
      )}
      value={value}
      onChange={(event) => {
        enforcer(event.target.value.replace(/,/g, '.'));
      }}
      // universal input options
      inputMode='decimal'
      autoComplete='off'
      autoCorrect='off'
      // text-specific options
      type='text'
      pattern='^[0-9]*[.,]?[0-9]*$'
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck='false'
    />
  );
}
