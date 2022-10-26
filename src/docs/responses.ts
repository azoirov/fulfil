// import ErrorCode from '@enums/error-code.enum';
// import SuccessCode from '@enums/success-code.enum';

// const successKeys = Object.keys(SuccessCode);

// const successMessages = successKeys.map((key: string) => {
//   return {
//     [key]: {
//       content: {
//         'application/json': {
//           schema: {
//             type: 'object',
//             properties: {
//               message: {
//                 type: 'string',
//                 default: SuccessCode[key],
//               },
//             },
//           },
//         },
//       },
//     },
//   };
// });

// const errorKeys = Object.keys(ErrorCode);

// const errorCodes = errorKeys.map((key: string) => {
//   return {
//     [key]: {
//       content: {
//         'application/json': {
//           schema: {
//             type: 'object',
//             properties: {
//               error: {
//                 type: 'object',
//                 properties: {
//                   code: {
//                     type: 'string',
//                     default: ErrorCode[key],
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   };
// });

// const responses = [...successMessages, ...errorCodes];

// export default responses.reduce(
//   (prevValue: object, currValue: object) => ({
//     ...prevValue,
//     ...currValue,
//   }),
//   Object.create(null),
// );
