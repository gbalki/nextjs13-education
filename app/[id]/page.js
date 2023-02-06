import { notFound } from 'next/navigation';
import styles from './styles.module.css';
import Image from 'next/image';

async function getPost(id) {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        return response.json();
    } catch (error) {
        throw new Error(error);
    }
}

export default async function page({ params }) {
    const { id, title, body } = await getPost(params.id);

    if (!title) {
        return notFound();
    }

    return (
        <div className={styles.blogContainer}>
            <div className={styles.cardImage}>
                <Image src={`https://picsum.photos/960/400?random=${id}`} alt={title} fill />
            </div>
            <h1 className={styles.title}>{title}</h1>
            <p>{body}</p>
        </div>
    )
}
