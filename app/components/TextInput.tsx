import React from 'react';

interface TextInputProps {
    value: string;
    placeholder: string;
    error?: string | null;
    onUpdate?: any;
}

const TextInput: React.FC<TextInputProps> = ({ value, placeholder, error, onUpdate }) => {
    return (
        <>
        <input
            placeholder={placeholder}
            className="
                w-full bg-white text-gray-800 border 
                text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none"
            value={value || ''}
            onChange={(event) => onUpdate(event.target.value)}
            type="text"
            autoComplete="off"
        />

        {error && <div className="text-red-500 text-[14px] font-semibold">{error}</div>}
        </>
    );
};

export default TextInput;