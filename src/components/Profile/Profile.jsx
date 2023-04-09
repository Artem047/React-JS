import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/564x/c7/57/b9/c757b95adf617a20ea8cb82a5c35967e.jpg' />
            </div>
            <div>
                ava + descriptions
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;