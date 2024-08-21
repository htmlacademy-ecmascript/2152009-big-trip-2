import { getRandomArrayElement } from '../utils';

const mockPoints = [
  {
    'id': '317fad2a-409b-46b2-a471-50c5350069c0',
    'basePrice': 4666,
    'dateFrom': '2024-08-05T17:26:07.604Z',
    'dateTo': '2024-08-06T16:31:07.604Z',
    'destination': '89e12da6-ee59-491a-9406-cbf493d4e381',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '394923e8-6eaa-455d-af84-7a0c30966a40',
    'basePrice': 700,
    'dateFrom': '2024-08-07T00:09:07.604Z',
    'dateTo': '2024-08-07T14:50:07.604Z',
    'destination': '4168e7bd-a158-4c90-adca-0b82841f6bc6',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '0c63e01f-3ee1-4907-b454-602192623858',
    'basePrice': 912,
    'dateFrom': '2024-08-08T00:08:07.604Z',
    'dateTo': '2024-08-08T16:14:07.604Z',
    'destination': 'c79e71b6-b9e0-4361-a0cd-7ec4acdc7bb8',
    'isFavorite': false,
    'offers': [
      '03985d3d-e225-413f-94f1-448c8b1d4003',
      'e7e638d1-8e9f-4de7-851f-c9aa4ac6d14b',
      'b19cfe27-9217-46d8-9bd6-71683724c89a'
    ],
    'type': 'ship'
  },
  {
    'id': 'ebe757f2-9e27-4c57-a10b-ff9f554e8e16',
    'basePrice': 6203,
    'dateFrom': '2024-08-10T15:34:07.604Z',
    'dateTo': '2024-08-11T08:25:07.604Z',
    'destination': '89e12da6-ee59-491a-9406-cbf493d4e381',
    'isFavorite': true,
    'offers': [
      '80310168-2fd6-4785-9bba-136f2d23083b',
      'b1847a0e-2ad4-4e87-96c0-57223e49e7c3',
      '6ca7f661-b320-4eb5-82fb-ad8c7cb52ba0',
      '7ceb018e-7ad0-48a6-990f-7b4dd448fbe6'
    ],
    'type': 'taxi'
  },
  {
    'id': 'fd41727e-b1cc-412c-88ae-af2a5b2bdb9f',
    'basePrice': 2779,
    'dateFrom': '2024-08-12T23:08:07.604Z',
    'dateTo': '2024-08-13T06:55:07.604Z',
    'destination': '2b21c196-eb73-40cc-8ada-ad7625ff4ee6',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'ebfbb83e-90cc-47f1-a0b7-2f3efa8d0359',
    'basePrice': 4716,
    'dateFrom': '2024-08-14T08:35:07.604Z',
    'dateTo': '2024-08-15T23:23:07.604Z',
    'destination': '4168e7bd-a158-4c90-adca-0b82841f6bc6',
    'isFavorite': true,
    'offers': [
      '9a21ea5c-e466-4cb1-9b95-1970910fb960',
      '75a33213-3787-42b0-bb6a-27f8eae21be9',
      '86cdf2af-822c-4c4a-8dda-3549886eaa3f',
      'b5352dfb-9392-4d06-9a80-4495430f9c0a',
      'e59b1629-3965-40dd-b6bb-3baf5916d9f9'
    ],
    'type': 'check-in'
  },
  {
    'id': 'abb847cb-11d1-457a-86c1-7c34598e1340',
    'basePrice': 6219,
    'dateFrom': '2024-08-16T17:30:07.604Z',
    'dateTo': '2024-08-17T16:25:07.604Z',
    'destination': '4168e7bd-a158-4c90-adca-0b82841f6bc6',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'b6d54743-14c4-47a9-9e1f-f0673d2724f7',
    'basePrice': 3052,
    'dateFrom': '2024-08-18T06:55:07.604Z',
    'dateTo': '2024-08-19T15:03:07.604Z',
    'destination': '89e12da6-ee59-491a-9406-cbf493d4e381',
    'isFavorite': false,
    'offers': [
      '0499fb38-2b99-4ffb-aa8a-497417faccc2',
      '03985d3d-e225-413f-94f1-448c8b1d4003',
      'e7e638d1-8e9f-4de7-851f-c9aa4ac6d14b',
      'b19cfe27-9217-46d8-9bd6-71683724c89a'
    ],
    'type': 'ship'
  },
  {
    'id': '54e75c8e-cb72-4fd7-a910-22af26cecbf4',
    'basePrice': 2210,
    'dateFrom': '2024-08-20T18:53:07.604Z',
    'dateTo': '2024-08-21T17:23:07.604Z',
    'destination': '0b4fe30e-e63a-4838-8d44-29222d10e49e',
    'isFavorite': true,
    'offers': [
      '65ecc0e7-d036-45ae-af84-e04096bfc23c'
    ],
    'type': 'drive'
  },
  {
    'id': 'cd9cf523-4700-4093-a0f7-6c3417982f1f',
    'basePrice': 3107,
    'dateFrom': '2024-08-22T04:42:07.604Z',
    'dateTo': '2024-08-23T23:13:07.604Z',
    'destination': '2b21c196-eb73-40cc-8ada-ad7625ff4ee6',
    'isFavorite': false,
    'offers': [
      'ed9d92b6-f852-48a7-8c14-20094038d29c',
      '00d4f9f9-8fb6-4bb9-9e44-b5bd49120d36',
      'ee7f4ee8-bee6-4390-a83c-ebbba78c6f92'
    ],
    'type': 'train'
  },
  {
    'id': 'df8fd409-d3a0-41f9-84f1-86fae48860af',
    'basePrice': 7399,
    'dateFrom': '2024-08-24T07:32:07.604Z',
    'dateTo': '2024-08-26T05:42:07.604Z',
    'destination': '6af36545-fd12-434b-a608-4fa75cea6dcf',
    'isFavorite': false,
    'offers': [
      '33f762be-8a51-4cb3-9946-2b13761a8cd1',
      'da73433b-7681-45b0-97c3-3eca970d4c46'
    ],
    'type': 'restaurant'
  },
  {
    'id': '67e671e2-18b6-4c42-ad94-5941e98cafde',
    'basePrice': 3257,
    'dateFrom': '2024-08-27T12:16:07.604Z',
    'dateTo': '2024-08-28T04:17:07.604Z',
    'destination': '755b06c1-7cc5-4b08-805c-0b2b105dff42',
    'isFavorite': false,
    'offers': [
      '75a33213-3787-42b0-bb6a-27f8eae21be9',
      '86cdf2af-822c-4c4a-8dda-3549886eaa3f',
      'b5352dfb-9392-4d06-9a80-4495430f9c0a',
      'e59b1629-3965-40dd-b6bb-3baf5916d9f9'
    ],
    'type': 'check-in'
  },
  {
    'id': '63ea8488-92d5-453a-8d0a-f1466eb895b6',
    'basePrice': 3162,
    'dateFrom': '2024-08-30T03:26:07.604Z',
    'dateTo': '2024-08-31T02:46:07.604Z',
    'destination': '0b4fe30e-e63a-4838-8d44-29222d10e49e',
    'isFavorite': false,
    'offers': [
      '303d6038-8c9a-45db-bd93-8761f1f61b32',
      '0499fb38-2b99-4ffb-aa8a-497417faccc2',
      '03985d3d-e225-413f-94f1-448c8b1d4003',
      'e7e638d1-8e9f-4de7-851f-c9aa4ac6d14b',
      'b19cfe27-9217-46d8-9bd6-71683724c89a'
    ],
    'type': 'ship'
  },
  {
    'id': '7e2fb3a1-b8fc-4f6a-8b65-07a9c2fd8fa4',
    'basePrice': 8358,
    'dateFrom': '2024-09-01T03:22:07.604Z',
    'dateTo': '2024-09-02T12:24:07.604Z',
    'destination': '4168e7bd-a158-4c90-adca-0b82841f6bc6',
    'isFavorite': false,
    'offers': [
      '0499fb38-2b99-4ffb-aa8a-497417faccc2',
      '03985d3d-e225-413f-94f1-448c8b1d4003',
      'e7e638d1-8e9f-4de7-851f-c9aa4ac6d14b',
      'b19cfe27-9217-46d8-9bd6-71683724c89a'
    ],
    'type': 'ship'
  },
  {
    'id': '0a79b9e5-84c7-442a-865b-a00b5651cd96',
    'basePrice': 1744,
    'dateFrom': '2024-09-03T20:22:07.604Z',
    'dateTo': '2024-09-05T19:58:07.604Z',
    'destination': '755b06c1-7cc5-4b08-805c-0b2b105dff42',
    'isFavorite': true,
    'offers': [
      'b5352dfb-9392-4d06-9a80-4495430f9c0a',
      'e59b1629-3965-40dd-b6bb-3baf5916d9f9'
    ],
    'type': 'check-in'
  },
  {
    'id': '3c1f2034-de62-4457-b47a-ab296c14e91f',
    'basePrice': 7578,
    'dateFrom': '2024-09-06T06:11:07.604Z',
    'dateTo': '2024-09-07T03:31:07.604Z',
    'destination': '4168e7bd-a158-4c90-adca-0b82841f6bc6',
    'isFavorite': false,
    'offers': [
      'a131138d-396e-4ffc-a9ba-20c42c11821f',
      '31f2c347-ac02-4367-b8c6-55368f3861c1',
      'f0399e5d-76a1-49c1-93ad-f2ec0a513c37',
      '346d8fe8-6b18-4a66-ad37-34910c316c55',
      '98057faa-74e9-44c1-af27-88b64033f1b0',
      '6ec9324f-5a08-4487-8b31-94b227e0e21f'
    ],
    'type': 'flight'
  },
  {
    'id': 'be243f33-d987-47a2-8ed4-6e504795dfd4',
    'basePrice': 5798,
    'dateFrom': '2024-09-07T21:25:07.604Z',
    'dateTo': '2024-09-08T23:17:07.604Z',
    'destination': '755b06c1-7cc5-4b08-805c-0b2b105dff42',
    'isFavorite': true,
    'offers': [
      '7ceb018e-7ad0-48a6-990f-7b4dd448fbe6'
    ],
    'type': 'taxi'
  },
  {
    'id': 'fba29fe2-4780-4c2d-b5a1-ea4f3b206441',
    'basePrice': 8115,
    'dateFrom': '2024-09-09T21:05:07.604Z',
    'dateTo': '2024-09-10T06:21:07.604Z',
    'destination': '0b4fe30e-e63a-4838-8d44-29222d10e49e',
    'isFavorite': true,
    'offers': [
      'e59b1629-3965-40dd-b6bb-3baf5916d9f9'
    ],
    'type': 'check-in'
  },
  {
    'id': '9cd3009f-1dd2-44ca-9f5f-47767eaa8028',
    'basePrice': 4888,
    'dateFrom': '2024-09-10T21:14:07.604Z',
    'dateTo': '2024-09-11T03:21:07.604Z',
    'destination': '2b21c196-eb73-40cc-8ada-ad7625ff4ee6',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'ea157153-4826-4d63-99e5-95c73af8e62c',
    'basePrice': 9395,
    'dateFrom': '2024-09-11T12:30:07.604Z',
    'dateTo': '2024-09-12T15:50:07.604Z',
    'destination': '1764737c-029f-438c-ba99-d1e8e73efe50',
    'isFavorite': true,
    'offers': [
      '0499fb38-2b99-4ffb-aa8a-497417faccc2',
      '03985d3d-e225-413f-94f1-448c8b1d4003',
      'e7e638d1-8e9f-4de7-851f-c9aa4ac6d14b',
      'b19cfe27-9217-46d8-9bd6-71683724c89a'
    ],
    'type': 'ship'
  },
  {
    'id': '8a271d81-db7c-4cb3-852b-bf71de68a2ea',
    'basePrice': 6038,
    'dateFrom': '2024-09-13T17:35:07.604Z',
    'dateTo': '2024-09-15T06:58:07.604Z',
    'destination': '89e12da6-ee59-491a-9406-cbf493d4e381',
    'isFavorite': false,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': 'bccd3488-c673-4c12-b042-d95c1eb8da54',
    'basePrice': 9667,
    'dateFrom': '2024-09-15T16:43:07.604Z',
    'dateTo': '2024-09-16T09:31:07.604Z',
    'destination': '89e12da6-ee59-491a-9406-cbf493d4e381',
    'isFavorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '06846f2a-20b6-47f7-8656-f3c7dd897813',
    'basePrice': 911,
    'dateFrom': '2024-09-16T22:46:07.604Z',
    'dateTo': '2024-09-17T08:16:07.604Z',
    'destination': '6af36545-fd12-434b-a608-4fa75cea6dcf',
    'isFavorite': true,
    'offers': [
      'f0399e5d-76a1-49c1-93ad-f2ec0a513c37',
      '346d8fe8-6b18-4a66-ad37-34910c316c55',
      '98057faa-74e9-44c1-af27-88b64033f1b0',
      '6ec9324f-5a08-4487-8b31-94b227e0e21f'
    ],
    'type': 'flight'
  },
  {
    'id': 'dbc08296-7725-455d-86be-546a5e1e3128',
    'basePrice': 4679,
    'dateFrom': '2024-09-17T16:15:07.604Z',
    'dateTo': '2024-09-18T13:41:07.604Z',
    'destination': 'c4dc0c05-c777-4a54-963e-f34b30c27a47',
    'isFavorite': false,
    'offers': [
      '303d6038-8c9a-45db-bd93-8761f1f61b32',
      '0499fb38-2b99-4ffb-aa8a-497417faccc2',
      '03985d3d-e225-413f-94f1-448c8b1d4003',
      'e7e638d1-8e9f-4de7-851f-c9aa4ac6d14b',
      'b19cfe27-9217-46d8-9bd6-71683724c89a'
    ],
    'type': 'ship'
  },
  {
    'id': 'c098eeb1-1c54-4632-b917-d6490a083134',
    'basePrice': 2961,
    'dateFrom': '2024-09-18T20:25:07.604Z',
    'dateTo': '2024-09-19T12:44:07.604Z',
    'destination': '2b21c196-eb73-40cc-8ada-ad7625ff4ee6',
    'isFavorite': true,
    'offers': [
      'ed9d92b6-f852-48a7-8c14-20094038d29c',
      '00d4f9f9-8fb6-4bb9-9e44-b5bd49120d36',
      'ee7f4ee8-bee6-4390-a83c-ebbba78c6f92'
    ],
    'type': 'train'
  }
];
function getRandomPoint(){
  return getRandomArrayElement(mockPoints);
}

export default getRandomPoint;
