const generateOnboardingEmailBody = (username: string) => {
    return `<div>
                <p> Hi ${username}, </p>
                <p> You have been onboarded </p>
            </div>`;
};

const generateOffboardingEmailBody = (username: string) => {
    return `<div>
                <p> Hi ${username}, </p>
                <p> You have been OffBoarded. Thanks for you contribution. </p>
            </div>`;
};
