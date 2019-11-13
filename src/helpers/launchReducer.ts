export default (launches: any) => launches.reduce((a: any, c: any) => {
    if (c.location.name in a) {
        a[c.location.name].push(c);
    } else {
        a[c.location.name] = [];
        a[c.location.name].push(c);
    }
    return a
}, {});