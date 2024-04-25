<!-- Introduction to TypeScript -->

TypeScript bu javascript bilan birga ishlaydi hamda compoiler deb ham atashimish mumkin misol uchun typescriptda yozgan kodlarimzni js ga o'giriladi chunki buni browser TS ni tanimaydi buni kichik kamchilik sifatida qarashimiz mumkin . TypeScript bu turlar uchun qoshilgan syntax js ga bu statik qo'shiladi. Misol uchun agar bir number yoki string turdagi o'zgaruvchilarni yaratmoqchi bo'lsak aniq number yoki stringda bo'lsin deb turini aniq ko'rsatishimiz kerak shunda kodlar aniq ishlaydi agar ushbu belgilangan turlardan boshlqalarini kiritsak typescriptni o'zidayoq ogohlantrish beradi va shu yerni o'zida muommoni hal qilishga yordam beradi productionga chiqmasdan avval bu coder uchun ancha yordam beradi chunki productionda xatoliklarni yechish qiyin bo;lib ketishi mumkin. Ana endi nima uchun TYPESCRIPT bizga kerakligini ko'rib chiqamiz masalan arrayda qanday o'rin tutadi (let numbersArr:number[]=[10,12,3] ushbu ko'rinishdi numberlardi massivi deyshimiz mumkin va number tipidan boshqa narsa kirita olmaymiz agar istalgan qilymatni kiritmoqchi bo'lsak numberdi or'rniga any kalit so'zini yozishimiz kerak bo'ladi lekin ushbu yolda foydalanish unchalik tavsiya etilmaydi chunki js dan farqi qolmaydi suhbu holatda va js tilida initilaiz bilan declarationdi bir qatorda ko'ramiz )
Typescriptni ishlatish uchun terminalimizda ishlatishimzni ko'rib chiqamiz
1.npm install -g typescript birinchi bosqichda install yani o'rnatib olamiz
2.tsc -v tekshiramiz 3.
O'rnatganimzdan so'ng esa kod yozishni boshlaymiz va typescriptda yozilan kodlarimzni compail qilish uchun tsc main.ts ushbu buyruqni beramiz js dagi file qanday yozilgan bolsa shunday holatda

Qo'shimchasiga TS da oddiy turlarni birlashtrib murakkab turlarni yaratish mumkin buning 2 ta ko'p qo'llaniladigon usullari bor unions va generics

Birinchi yo'l yani unions usuli turlarni birlashtrishni ko'rib chiqamiz type MyBool = true | false bunda yoki true bo'lsin yoki false deb belgilab qo'ydik ushbu holatni number | string | null deb ham belgilash mumkin.

Ikkinchi yo'l yani Generics bu turlarga o'zgaruvchilar beradi. Generics massiv har qanday narsani o'z ichiga olishi mumkin

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

Qisqacha qilib aytganda TS dasturchi uchun yordamchi deb qarashimiz mumkin
