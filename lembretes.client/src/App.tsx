// @ts-nocheck
// @ts-ignore
// @jsx-ignore
// @flow

/**
 * @fileoverview This is a sample file with UTF-8 encoding.
 */


import { useEffect, useState } from 'react';
import './App.css';

interface Reminder {
    id: number;
    date: string;
    time: string;
    description: string;
}

function App() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [newReminder, setNewReminder] = useState<Reminder>({ id: 0, date: '', time: '', description: '' });
    const [editingReminderId, setEditingReminderId] = useState<number | null>(null);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        populateReminderData();
    }, []);

    useEffect(() => {
        const isDisabled =
            !newReminder.date ||
            new Date(newReminder.date + ' ' + newReminder.time).getTime() <= Date.now() ||
            !newReminder.description;

        setIsButtonDisabled(isDisabled);
    }, [newReminder]);

    const contents = reminders.length === 0 ? (
        <p>Nenhum lembrete cadastrado.</p>
    ) : (
        <div>
            <h2>Lista de Lembretes</h2>
            {getUniqueDates().map((date) => (
                <div key={date}>
                    <h3>{formatDate(date)}</h3>
                    <table className="table table-striped" aria-labelledby="tabelLabel">
                        <thead>
                            <tr>
                                <th>Hora</th>
                                <th>Atividade</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {reminders
                                .filter((reminder) => reminder.date === date)
                                .sort((a, b) => (a.time > b.time ? 1 : -1))
                                .map((reminder) => (
                                    <tr key={reminder.id}>
                                        <td>{reminder.time}</td>
                                        <td>{reminder.description}</td>
                                        <td>
                                            <button onClick={() => startEditing(reminder.id)}>Editar</button>
                                            <button onClick={() => deleteReminder(reminder.id)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <h1 id="tabelLabel">Lembretes</h1>
            <hr className="divider" />
            <div>
                <h2>Adicionar/Editar Lembrete</h2>
                <form onSubmit={handleSubmit}>
                    <label>Data:</label>
                    <input type="date" value={newReminder.date} onChange={(e) => handleInputChange('date', e.target.value)} />

                    <label>Hora da atividade:</label>
                    <input type="time" value={newReminder.time} onChange={(e) => handleInputChange('time', e.target.value)} />

                    <label>Atividade:</label>
                    <input
                        type="text"
                        value={newReminder.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                    />

                    {isButtonDisabled && (
                        <p style={{ color: 'red', fontSize: 'small' }}>
                            * Verifique se todos os campos foram preenchidos corretamente
                        </p>
                    )}

                    <button type="submit" disabled={isButtonDisabled}>
                        {editingReminderId !== null ? 'Atualizar Lembrete' : 'Adicionar Lembrete'}
                    </button>
                </form>
            </div>
            {contents}
        </div>
    );

    function populateReminderData() {
        const existingReminders = [
            { id: 1, date: '2024-10-31', time: '10:00', description: 'Reuniao com cliente' },
            { id: 2, date: '2024-12-01', time: '04:00', description: 'Reuniao de equipe' },
            { id: 3, date: '2024-05-01', time: '02:30', description: 'Enviar relatorio' },
            { id: 4, date: '2024-03-02', time: '09:00', description: 'Apresentacaoo do projeto' },
        ];

        setReminders(existingReminders);
    }

    function handleInputChange(field: keyof Reminder, value: string) {
        setNewReminder({ ...newReminder, [field]: value });
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (new Date(newReminder.date + ' ' + newReminder.time).getTime() <= Date.now()) {
            setErrorMessage('A data/horário deve estar no futuro.');
            return;
        }

        if (!newReminder.description) {
            setErrorMessage('A descrição não pode estar vazia.');
            return;
        }

        setErrorMessage('');

        if (editingReminderId !== null) {

            const updatedReminders = reminders.map((reminder) =>
                reminder.id === editingReminderId ? { ...reminder, ...newReminder } : reminder
            );
            setReminders(updatedReminders);
            setEditingReminderId(null);
        } else {
            setReminders([...reminders, { ...newReminder, id: generateUniqueId() }]);
        }

        setNewReminder({ id: 0, date: '', time: '', description: '' });
    }

    function generateUniqueId() {
        return reminders.length > 0 ? Math.max(...reminders.map((reminder) => reminder.id), 0) + 1 : 1;
    }

    function startEditing(id: number) {
        const reminderToEdit = reminders.find((reminder) => reminder.id === id);
        if (reminderToEdit) {
            setNewReminder(reminderToEdit);
            setEditingReminderId(id);
        }
    }

    function deleteReminder(id: number) {
        const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
        setReminders(updatedReminders);
    }

    function getUniqueDates() {
        return [...new Set(reminders.map((reminder) => reminder.date))].sort();
    }

    function formatDate(dateString: string) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
}

export default App;

