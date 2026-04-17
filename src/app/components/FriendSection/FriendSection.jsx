import FriendCard from "./FriendCard";



const friendsPromise = async function (){
    const res = await fetch("http://localhost:3000/friends.json")
    const data = await res.json();
    return data;
}

const FriendSection = async() => {
    const friends = await friendsPromise();
    console.log(friends)

    return (
        <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-xl font-bold mb-3">Your Friends</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friends.map(friend => {
          return <FriendCard key={friend.id} friend={friend}/>;
        })}
         </div>
        </div>
    );
};

export default FriendSection;

