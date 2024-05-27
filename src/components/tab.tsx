import Posts from "./posts";
import { useCollectionFetch } from "../hooks/useCollectionFetch";
import Post from "./post";
import { dishT } from "../utils/types";

export default function Tab() {
    const {collection} = useCollectionFetch();
    return (
        <div>
            <style>
            </style>
            {collection.length > 0 && 
            (collection?.map((dish) => {
                return (
                    <Post {...dish as dishT} />
                )
            }))}
            
        </div>
    )
}