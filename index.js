document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const profilePushButton = document.getElementById("profilePushButton");
    const askForPushButton = document.getElementById("askForPushButton");
    const eventButton = document.getElementById("eventButton");

    const getFormData = () => {
        return {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            dob: new Date(document.getElementById("dob").value)
        };
    };

    loginButton.addEventListener("click", () => {
        const { name, email, phone, dob } = getFormData();
        clevertap.onUserLogin.push({
            "Site": {
                "Name": name,
                "Email": email,
                "Phone": phone,
                "DOB": dob
            }
        });
        console.log("Login event pushed to CleverTap.");
    });

    profilePushButton.addEventListener("click", () => {
        const { name, email, phone, dob } = getFormData();
        clevertap.profile.push({
            "Site": {
                "Name": name,
                "Email": email,
                "Phone": phone,
                "DOB": dob
            }
        });
        console.log("Profile push event pushed to CleverTap.");
    });

    askForPushButton.addEventListener("click", () => {
        clevertap.notifications.push({
            "titleText": 'Would you like to receive Push Notifications?',
            "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
            "okButtonText": 'Sign me up!',
            "rejectButtonText": 'No thanks',
            "askAgainTimeInSeconds": 5,
            "okButtonColor": '#f28046'
        });
        console.log("Push notification prompt triggered.");
    });

    eventButton.addEventListener("click", () => {
        clevertap.event.push("CustomEvent", {
            "DateTimeProperty": new Date(),
            "StringProperty": "Sample String",
            "IntegerProperty": 42,
            "FloatProperty": 3.14
        });
        console.log("Custom event pushed to CleverTap.");
    });
});
