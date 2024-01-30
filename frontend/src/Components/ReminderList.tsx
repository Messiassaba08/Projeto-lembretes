
import React from 'react';

interface Reminder {
    id: number;
    text: string;
}

interface ReminderListProps {
    reminders: Reminder[];
    onEdit: (reminder: Reminder) => void;
    onDelete: (id: number) => void;
}

const ReminderList: React.FC<ReminderListProps> = ({ reminders, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Lista de Lembretes</h2>
            <ul>
                {reminders.map((reminder) => (
                    <li key={reminder.id}>
                        {reminder.text}{' '}
                        <button onClick={() => onEdit(reminder)}>Editar</button>{' '}
                        <button onClick={() => onDelete(reminder.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReminderList;
