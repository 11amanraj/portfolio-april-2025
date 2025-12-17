import React from 'react'
import Form from '../Components/A11Y UI Components/Form'

const HomePage = () => {
    return (
        <>
            <h1 className='font-mono text-3xl sm:text-8xl'>UI Components // A11Y</h1>

            <section className='min-h-screen bg-amber-400 flex-col justify-center content-center'>
                <h2 className='outline-1'>Form Component</h2>
                <Form />
            </section>

            <section className='min-h-screen bg-green-400'>
                <h2>Button Component</h2>
                <form>
                </form>
            </section>

            <section className='min-h-screen bg-red-400'>
                <h2>Toast Component</h2>
                <form>
                </form>
            </section>

            <section className='min-h-screen bg-violet-400'>
                <h2>Modal Component</h2>
                <form>
                </form>
            </section>
        </>
    )
}

export default HomePage