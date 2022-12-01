import { useState } from 'react';

export function RegisterForm() {
    const [form, setForm] = useState({
        firstName: 'Agnivesh',
        lastName: 'Chaubey',
        email: 'agn@gmail.com',
    });

    function handleChange(e) {
        setForm({ ...form, fiestName: e.target.value });
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



