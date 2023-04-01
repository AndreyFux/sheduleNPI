import * as cheerio from 'cheerio'

export const createShedule = (myHtml) => {
    let monday = [];
    let tuesday = [];
    let wendsday = [];
    let thuesday = [];
    let friday = [];
    let spisok = [monday, tuesday, wendsday, thuesday, friday];
    const $ = cheerio.load(myHtml);
    $('.schedule-main').each((i, el) => {
        const data = $(el)
        spisok.forEach((lst, index) => {
            let shed = data.find(`td.day${index + 1}`)
            lst.push(shed.text().trim())
        })
    })

    let ans = spisok.map((item) => {
        item.splice(-2, 2);
        return item.map((str) => str.replace(/\n/g, '').replace(/\s+/g, ' '))
    })

    const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    try {
        const rap = ans.map((item) => {
            return item.map((value, index) => {
                if (value) {
                    let valShedule = {};
                    if (value.includes('Иностранный язык')) {
                        return {
                            "week": index % 2 == 0 ? 1 : 2,
                            "title": "Иностранный язык"
                        }
                    };
                    valShedule.week = index % 2 == 0 ? 1 : 2;
                    valShedule.classRoom = value.match(/^\d{3}[А-Я]{1,3}/) != null ? value.match(/^\d{3}[А-Я]{1,3}/)[0] : "";
                    value = value.replace(valShedule.classRoom, '');
                    valShedule.type = value.match(/(?<=\s)[А-Я]{2,3}(?=\s)/) !== null ? value.match(/(?<=\s)[А-Я]{2,3}(?=\s)/)[0] : "";
                    value = value.replace(valShedule.type, '').trim();
                    valShedule.title = value.match(/^(.*)\)/) ? value.match(/^(.*)\)/)[0] : '';
                    valShedule.teacher = value.replace(/.*\)/, '');
                    return valShedule
                }
                return {
                    "week": index % 2 == 0 ? 1 : 2,
                    "title": "",
                }
            })
        })



        const scheduleObj = rap.reduce((acc, cur, index) => {
            cur.forEach((item) => {
                const dayOfWeek = daysOfWeek[index];
                if (!acc[dayOfWeek]) {
                    acc[dayOfWeek] = [];
                }


                if (item.title && item.week == 1) {
                    acc[dayOfWeek].push({
                        classRoom: item.classRoom || '',
                        type: item.type || '',
                        title: item.title || '',
                        teacher: item.teacher || '',
                    });
                }
                else if (item.title === '' && item.week === 1) {
                    acc[dayOfWeek].push({
                    })
                }
            });
            return acc;
        }, {});

        const scheduleObj1 = rap.reduce((acc, cur, index) => {
            cur.forEach((item) => {

                const dayOfWeek = daysOfWeek[index];
                if (!acc[dayOfWeek]) {
                    acc[dayOfWeek] = [];
                }

                if (item.title && item.week == 2) {
                    acc[dayOfWeek].push({
                        classRoom: item.classRoom || '',
                        type: item.type || '',
                        title: item.title || '',
                        teacher: item.teacher || '',
                    });
                }
                else if (item.title === '' && item.week === 2) {
                    acc[dayOfWeek].push({
                    })
                }
            });
            return acc;
        }, {});

        let sheduleFull = {};
        sheduleFull.week_1 = scheduleObj;
        sheduleFull.week_2 = scheduleObj1;
        return sheduleFull
    }
    catch (e) {
        console.log(e)
    }
}

