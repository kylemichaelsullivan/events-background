export type Event = {
  what: string;
  when: string;
};

export type Topic = {
  topic: string;
  events: Event[];
};

export type Items = Topic[];
