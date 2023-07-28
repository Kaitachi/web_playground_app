import { env } from "$env/dynamic/private";
import { json } from "@sveltejs/kit";

export async function GET() {
	const getTime = async() => {
		console.log(`Fetching data from ${env.BASE_API}...`);
		const res = await fetch(`${env.BASE_API}/time`);
		const data = await res.json();
		
		return data;
	};

	const time = await getTime();

	return json(time);
}

