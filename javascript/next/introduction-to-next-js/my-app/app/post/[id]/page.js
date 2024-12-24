import Layout from "@/app/navigation";
import posts from "../../data/posts";
import styles from "./styles.module.css";

export default function Post({ params }) {
    // find post with param id in db
    const post = posts.find(post => post.id === params.id);

    // if post is not return this warning
    if (!post)
        return <Layout>
            <h1 className="text-3xl font-bold mb-6 p-2 text-red-600">No post found with the id: {params.id}</h1>
        </Layout>;


    // show the post if is present in db
    return <Layout>
        <section className={styles.container}>
            <p className={styles.id}>Post id: {params.id}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.content}>{post.content}</p>
        </section>
    </Layout>;
}