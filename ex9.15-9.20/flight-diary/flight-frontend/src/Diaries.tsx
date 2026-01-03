import { useEffect, useState } from 'react';
import type { Diary } from './types';
import { createDiary, getAllDiaries } from './diaryService';

const Diaries = () => {
    const [diaries, setDiaries] = useState<Diary[]>([]);
    const [newDate, setNewDate] = useState('');
    const [newWeather, setNewWeather] = useState('');
    const [newVisibility, setNewVisibility] = useState('');
    const [newComment, setNewComment] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const diaryCreation = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        try {
            const createdDiary = await createDiary({
                date: newDate,
                weather: newWeather,
                visibility: newVisibility,
                comment: newComment,
            });

            setDiaries(diaries.concat(createdDiary));
            setErrorMessage(null);

            setNewDate('');
            setNewWeather('');
            setNewVisibility('');
            setNewComment('');
            setErrorMessage(null);

        } catch (error: unknown) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('couldn\'t create diary for unknown reason');
            }
        }
    };

    useEffect(() => {
        getAllDiaries().then(data => {
            setDiaries(data);
        });
    }, [])

    return (
        <div>
            <h2>Add new diary</h2>
            {errorMessage && (
                <div style={{ color: 'red' }}>
                    {errorMessage}
                </div>
            )}
            <form onSubmit={diaryCreation}>
                date
                <input
                    value={newDate}
                    onChange={(event) => setNewDate(event.target.value)}
                />
                <br />
                visibility
                <input
                    value={newVisibility}
                    onChange={(event) => setNewVisibility(event.target.value)}
                />
                <br />
                weather
                <input
                    value={newWeather}
                    onChange={(event) => setNewWeather(event.target.value)}
                />
                <br />
                comment
                <input
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                />
                <br />
                <button type='submit'>add diary</button>
            </form>
            {diaries.map(diary => (
            <div key={diary.id}>
                <h2>{diary.date}</h2>
                <p>visibility: {diary.visibility}</p>
                <p>weather: {diary.weather}</p>
            </div>
            ))}
        </div>
    )
}

export default Diaries;