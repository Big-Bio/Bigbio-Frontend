import React, { useEffect, useState } from "react";

import Page from "../../components/Page/Page";
import FreeTextArea from "../../components/Input/FreeTextArea"
import FreeInput from "../../components/Input/FreeInput"
import { Text, Subhead } from "../../components/Text/text";
import { useForm } from "../../services/forms/Hooks";

const ContributorApp = props => { 
    const {handleInputChange, handleSubmit, inputs} = useForm();
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div>
            <Page heading="Contributor Application">
            <form onSubmit={handleSubmit}>
            <Subhead>Apply Here</Subhead>
                <Text>Username</Text>
                <FreeInput
                    type="username"
                    name="username"
                    onChange={handleInputChange}
                    value={inputs.username}
                    required
                />
                <Text>Password</Text>
                <FreeInput
                    type="username"
                    name="username"
                    onChange={handleInputChange}
                    value={inputs.username}
                    required
                />
                <Text>Password</Text>
                <FreeInput
                    type="username"
                    name="username"
                    onChange={handleInputChange}
                    value={inputs.username}
                    required
                />
            </form>
            </Page>
        </div>
    );
}

export default ContributorApp