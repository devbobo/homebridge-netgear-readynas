const { execSync } = require('child_process');

function status(host) {
    const output = execSync(`ping -W 1 -c 1 ${host} > /dev/null && echo "on" || echo "off"`);
    const statusBoolean = output.toString().indexOf('on') !== -1 ? true : false;
    return statusBoolean;
}

module.exports = status;
