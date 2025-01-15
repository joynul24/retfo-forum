import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
        .then(res => res.json())
        .then(data => setPosts(data.posts))
    },[])


    return(
        <div className="md:w-2/3 container mx-auto">
            {/* maping */}
            <div>
                {
                  posts.map(post => <Card key={post.id} post={post}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;