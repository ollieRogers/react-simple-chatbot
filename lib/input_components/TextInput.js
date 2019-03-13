import React from 'react';
import { Input } from '../components';

const TextInput = (
  metadata,
  type,
  style,
  innerRef,
  className,
  placeholder,
  onKeyPress,
  onChange,
  value,
  floating,
  invalid,
  disabled,
  hasButton,
  currentStep,
  ) => {
  return (
    <div>
      {
        (currentStep && currentStep.metadata && currentStep.metadata.prefix) &&
        <span className="rsc-input-prefix">
          {currentStep.metadata.prefix}
        </span>
      }
      <Input
        metadata={metadata}
        type={type}
        style={style}
        innerRef={innerRef}
        className={className}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={value}
        floating={floating}
        invalid={invalid}
        disabled={disabled}
        hasButton={hasButton}
      />
      {
        (currentStep && currentStep.metadata && currentStep.metadata.suffix) &&
        <span className="rsc-input-suffix">
          {currentStep.metadata.suffix}
        </span>
      }
    </div>
  )
}


export default TextInput;