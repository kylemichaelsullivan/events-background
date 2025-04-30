export type Event = {
	what: string;
	when: string;
	id: string;
};

export type Events = Event[];

export type Item = {
	topic: string;
	events: Events;
};

export type Items = Item[];
