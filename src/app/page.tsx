import Image from 'next/image'
import Stack from 'naxui/Stack'

import Intro from '@src/Pages/Home/intro'
import Project from '@src/Pages/Home/Project'


export default function Home() {
	return (
		<Stack>
			<Stack p={2} >
				<Intro />
			</Stack>
			<Stack my={5} >
				<Project />
			</Stack>
		</Stack >
	)
}
