/**
 *
 * Array used in FieldSwitch
 *
 * structure of object in array:
 * name: api model field name
 * inputLabel: text that appears in input
 * type: used to determine component type in FieldSwitch
 *
 * /// special types & their extra paramaters
 *
 * singleImageUpload
 * s3Path: path to bucket in s3
 * cropWidth, cropWidth: set the height and width of cropper tool
 */

export const signInFieldTypes = [
    {
        name: 'email',
        inputLabel: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        inputLabel: 'Password',
        type: 'password'
    }
]