import type { Mug, Skills, WorkItem, EmailContact, Link as LinkComponent } from "./components";

export type WorkData = {
	slug: string;
	title: string;
	description: string;
	imgs: Image[];
	links: Link[];
};

export type Image = {
	src: string;
	alt: string;
};

export type Link = {
	href: string;
	label: string;
};


export type ComponentAsync = typeof Mug | typeof Skills | typeof WorkItem | typeof EmailContact | typeof LinkComponent;