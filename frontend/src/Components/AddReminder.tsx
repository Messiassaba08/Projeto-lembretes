import React, { useState } from 'react';

interface AddReminderProps {
    onAdd: (text: string) => void;
}

const AddReminder: React.FC<AddReminderProps> = ({ onAdd }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        onAdd(text);
        setText('');
    };

    return (
        <div>
            <h2>Adicionar Lembrete</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Adicionar</button>
        </div>
    );
};

export default AddReminder;

