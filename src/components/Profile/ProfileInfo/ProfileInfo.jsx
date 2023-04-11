import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.pinimg.com/564x/c7/57/b9/c757b95adf617a20ea8cb82a5c35967e.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    )
}

export default ProfileInfo;