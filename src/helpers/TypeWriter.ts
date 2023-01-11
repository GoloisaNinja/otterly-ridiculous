let textPostition: number = 0;
let speed = 125;
export default function TypeWriter(str: string, el: Element): void {
	el.innerHTML = str.substring(0, textPostition);
	if (textPostition !== str.length + 1) {
		textPostition++;
		setTimeout(() => {
			TypeWriter(str, el);
		}, speed);
	}
}
