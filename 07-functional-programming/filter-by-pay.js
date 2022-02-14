let jobs = [
    {
        'name':'Zookeeper',
        'salary': 3000
    },
    {
        'name':'Beekeeper',
        'salary': 4000
    },
    {
        'name':'Hawker',
        'salary': 10000
    },
    {
        'name':'Pirated DVD Vendor',
        'salary':1000
    }
]

let shortlisted = jobs.filter(function(job){
    return job.salary >= 3000;
})
console.log(shortlisted);