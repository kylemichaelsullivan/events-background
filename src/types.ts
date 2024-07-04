export type Event = {
  where: string;
  when: string;
};

export type Events = Event[];

export type Item = {
  topic: string;
  events: Events;
};

export type Items = Item[];
