import React, { useMemo } from "react";
import { ShowcaseApp } from "@gorhom/showcase-template";
import { screens } from "./src/screens";
import { version } from "./package.json";
import { enableScreens } from "react-native-screens";
enableScreens(true);

const App = () => {
	// variables
	const author = useMemo(
		() => ({
			username: "Mo Gorhom",
			url: "https://gorhom.dev",
		}),
		[]
	);

	return <ShowcaseApp name="Bottom Sheet" description="123" version={version} author={author} data={screens} />;
};

export default App;
