import { useEffect, useState } from 'react';
import type { Diary } from './types';
import { getAllDiaries } from './diaryService';

const Diaries = () => {
    const [diaries, setDiaries] = useState<Diary[]>([]);

    useEffect(() => {
        getAllDiaries().then(data => {
            setDiaries(data);
        });
    }, [])

    return (
        <div>
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