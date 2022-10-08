import styles from '@/styles/Article.module.css';
import ReactPlayer from 'react-player'

export default function VideoTrama({ children, title, video }) {
    return (
        <div className="flex w-full max-w-full mx-auto">
            <div className="relative flex flex-col text-white items-center justify-center w-full min-h-[50vh] p-12 pt-24 overflow-hidden bg-zinc-900">
                <div className="w-full max-w-5xl aspect-video">
                    <ReactPlayer url={video} width="100%" height="550px" />
                </div>
                <article className='pt-6 prose prose-xl prose-invert'>
                    <h2>
                        {title}
                    </h2>
                    {children}
                </article>
            </div>
        </div>
    );
}
