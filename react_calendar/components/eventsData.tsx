
export interface EventData {
  title?: string;
  start?: any;
  end?: any;
  allDay?: boolean;
  desc?: string
}

const demoEvents: EventData[] =
  [
    {
      'title': 'All Day Event very long title',
      'allDay': true,
      'start': "2023 / 8 / 16",
      'end': "2023 / 8 / 16"
    },
    {
      'title': 'Long Event',
      'start': "2023 / 8 / 17",
      'end': "2023 / 8 / 17"
    },

    {
      'title': 'DTS STARTS',
      'start': "2023 / 8 / 21",
      'end': "2023 / 8 / 21"
    },

    {
      'title': 'DTS ENDS',
      'start': "2023 / 8 / 22",
      'end': "2023 / 8 / 22"
    },

    {
      'title': 'Some Event',
      'start': "2023, 9, 9",
      'end': "2023, 9, 9"    
    },
    {
      'title': 'Conference',
      'start': "2023, 8, 10",
      'end': "2023, 8, 10",
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': "2023, 3, 12",
      'end': "2023, 3, 12",
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start': "2023, 3, 12",
      'end': "2023, 3, 12",
      desc: 'Power lunch'
    },
    {
      'title': 'Meeting',
      'start': "2023, 3, 12",
      'end': "2023, 3, 12"
    },
    {
      'title': 'Happy Hour',
      'start': "2023, 3, 12",
      'end': "2023, 3, 12",
      desc: 'Most important meal of the day'
    },
    {
      'title': 'Dinner',
      'start': "2023, 3, 12",
      'end': "2023, 3, 12"
    },
    {
      'title': 'Birthday Party',
      'start': "2023, 3, 13",
      'end': "2023, 3, 13"
    },
    {
      'title': 'Birthday Party 2',
      'start': "2023, 3, 13",
      'end': "2023, 3, 13"
    },
    {
      'title': 'Birthday Party 3',
      'start': "2023, 3, 13",
      'end': "2023, 3, 13"
    },
    {
      'title': 'Late Night Event',
      'start': "2023, 3, 17",
      'end': "2023, 3, 18"
    },
    {
      'title': 'Multi-day Event',
      'start': "2023, 3, 20",
      'end': "2023, 3, 22"
    }
  ]
export default demoEvents