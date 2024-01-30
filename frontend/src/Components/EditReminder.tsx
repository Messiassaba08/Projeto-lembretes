import React, { useState } from 'react';

interface Reminder {
    id: number;
    text: string;
}

interface EditReminderProps {
    reminder: Reminder;
    onSave: (editedReminder: Reminder) => void;
}

const EditReminder: React.FC<EditReminderProps> = ({ reminder, onSave }) => {
    const [text, setText] = useState(reminder.text);

    const handleSave = () => {
        onSave({ ...reminder, text });
    };

    return (
        <div>
            <h2>Editar Lembrete</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSave}>Salvar</button>
        </div>
    );
};

export default EditReminder;

