import { unzip } from './unzipping'

export default (on, config) => {
    on('task', {
        'unzipping': unzip,
    })
}