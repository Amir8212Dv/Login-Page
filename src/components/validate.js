const validate = data => {
    const error = {}

    if (!data.name) {
        error.name = 'Please inter userName'
    } else {
        delete error.name
    }

    if (!data.email) {
        error.email = 'Please inter email'
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) {
        error.email = 'Please enter valid email'
    } else {
        delete error.email
    }

    if (!data.password) {
        error.password = 'Please inter password'
    } else if (data.password.length < 6) {
        error.password = 'Password must have leat 6 characters'
    } else {
        delete error.password
    }

    if (!data.confirmPassword  ) {
        error.confirmPassword = 'pleas inter confirm password'
    } else if (data.confirmPassword !== data.password) {
        error.confirmPassword = 'Confirm password is not equal to password'
    } else {
        delete error.confirmPassword
    }

    if (!data.checkBox) {
        error.checkBox = 'Please check the checkBox'
    } else {
        delete error.checkBox
    }
    return error    
}

export default validate

