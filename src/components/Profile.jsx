import s from './Profile.module.css'

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://i.pinimg.com/564x/c7/57/b9/c757b95adf617a20ea8cb82a5c35967e.jpg' />
        </div>
        <div>
            ava + descriptions
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile;