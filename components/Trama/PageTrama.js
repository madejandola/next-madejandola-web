import styles from '@/styles/Article.module.css';
import HeroTrama from "@/components/Heros/HeroTrama";
export default function PageTrama({ children, title, city, image, imageBlur }) {
    return (
        <div className="flex flex-col w-full max-w-full mx-auto">
            <HeroTrama title={title} subtitle={city} image={image} imageBlur={imageBlur} />
            <div className="w-full max-w-full mx-auto bg-white shadow-md">
                <div className={styles.mainContent}>
                    <article className={styles.articleText}>
                        {children}
                    </article>
                </div>
            </div>
        </div>
    );
}
