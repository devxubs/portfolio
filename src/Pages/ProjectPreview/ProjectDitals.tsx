import React from 'react'
import Stack from 'naxui/Stack'
import Text from "naxui/Text";

const ProjectDitals = () => {
    return (
        <Stack
            bgcolor="color.common"
            p={2}
            borderRadius={2}

            direction="row"
            alignItems='center'
        >
            <Stack spacing={1} width={150} >
                <Text
                    color="color.subtext"
                    fontSize={14}
                >
                    Client
                </Text>
                <Text
                    color="color.subtext"
                    fontSize={14}
                >
                    Company
                </Text>
                <Text
                    color="color.subtext"
                    fontSize={14}
                >
                    Project Type
                </Text>
                <Text
                    color="color.subtext"
                    fontSize={14}
                >
                    Year
                </Text>
            </Stack>
            <Stack spacing={1} >
                <Text
                    color="color.text"
                    fontSize={14}
                >
                    Gilbert Will
                </Text>
                <Text
                    color="color.text"
                    fontSize={14}
                >
                    Simply
                </Text>
                <Text
                    color="color.text"
                    fontSize={14}
                >
                    Landing page, Illustration design
                </Text>
                <Text
                    color="color.text"
                    fontSize={14}
                >
                    2023
                </Text>
            </Stack>
        </Stack>
    )
}

export default ProjectDitals