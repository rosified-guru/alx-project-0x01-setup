import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, id }) => {
    return (
        <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">Email: {email}</p>
            <span className="text-sm text-gray-500">User ID: {id}</span>
        </div>
    );

        
}
export default UserCard;