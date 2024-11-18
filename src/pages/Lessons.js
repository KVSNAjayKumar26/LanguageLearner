import React from 'react'
import LessonCard from '../components/LessonCard';

const Lessons = () => {
    const lessons = [
        { title: 'Basics of Spanish', description: 'Learn common phrases.', id: 1 },
        { title: 'French Greetings', description: 'Start with greetings.', id: 2 },
        { title: 'German Numbers', description: 'Learn counting.', id: 3 },
    ];
    return (
        <div className='lessons-page'>
            <h2>Lessons</h2>
            <div className='lesson-grid'>
                {lessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                ))}
            </div>
        </div>
    );
};

export default Lessons;