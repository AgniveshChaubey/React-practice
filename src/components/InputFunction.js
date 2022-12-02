import { useState, useRef } from 'react';

export function RegisterForm() {
    const [form, setForm] = useState({
        firstName: 'Agnivesh',
        lastName: 'Chaubey',
        email: 'agn@gmail.com',
    });
 
    function handleChange(e) {
        setForm({ ...form, firstName: e.target.value });
    };

    return (
        <div>
            <label> First name:
                <input value={form.firstName} onChange={handleChange} />
            </label>
            <label>
                Last name :
                <input value={form.lastName} onChange={(e) => {
                    setForm({...form, lastName: e.target.value });
                }}
                />
            </label>
            <label>
                <input value={form.email} onChange={(e) => {
                    setForm({...form, email: e.target.value });
                }}
                />
            </label>
            <p>
                {form.firstName}{}
                {form.lastName}{}
                ({form.email})
            </p>
        </div>
    );
};


// useRef example

export function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
