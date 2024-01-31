import React from 'react';

interface DeleteReminderProps {
    onDelete: () => void;
    onCancel: () => void;
}

const DeleteReminder: React.FC<DeleteReminderProps> = ({ onDelete, onCancel }) => {
    return (
        <div>
            <h2>Tem certeza que deseja excluir este lembrete?</h2>
            <button onClick={onDelete}>Sim</button>
            <button onClick={onCancel}>Cancelar</button>
        </div>
    );
};

export default DeleteReminder;

