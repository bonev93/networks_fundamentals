# Secure Socket Layer (SSL), Transport Layer Security(TLS) и Hyper Text Transfer Protocol Secure(HTTPS)

## Какво представляват SSL/TLS протоколите?

Secure Sockets Layer (SSL) и Transport Layer Security (TLS) са криптографски протоколи за сигурност. Те се използват, за да се гарантира, че мрежовата комуникация е сигурна. Основните им цели са да осигурят целостта на данните и поверителността на комуникацията. Протоколът SSL е първият протокол, създаден за тази цел, а TLS е негов наследник. SSL вече се счита за остарял и несигурен (дори и най-новата му версия), така че модерните браузъри като Chrome или Firefox използват вместо него TLS.

SSL и TLS обикновено се използват от уеб браузърите за защита на връзките между уеб приложенията и уеб сървърите. Много други TCP-базирани протоколи също използват TLS/SSL, включително имейл (SMTP/POP3), незабавни съобщения (XMPP), FTP, VoIP, VPN и други. Обикновено, когато услугата използва защитена връзка, буквата S се добавя към името на протокола, например HTTPS. В повечето случаи реализациите на SSL/TLS се базират на библиотеката OpenSSL.

# SSL

Първоначално създаден от Нетскейп, за да отговори на растящата нужда от сигурна комуникация в интернет.

Има три основни версии:
SSL 1.0 – Интересното тук е, че тази версия никога не е публично публикувана поради проблеми със сигурността.
SSL 2.0 – Първата използваема версия е проектирана от Netscape и пусната през 1995 г. В нея обаче са открити уязвимости, което кара Netscape да проектира нова, по-добра и по-сигурна версия.
SSL 3.0 – Излиза година по-късно. SSL 3.0 е широко използвана до есента на 2014 г., когато екипа по сигурността на Google открива голяма уязвимост в нея (уязвимостта Poodle).

Уязвимости:

- Heartbleed - уязвимост в OpenSSL, популярна криптографска библиотека с отворен код, която помага при внедряването на SSL и TLS протоколи. Тази грешка позволява на нападателите да откраднат частни ключове, прикачени към SSL сертификати, потребителски имена, пароли и други чувствителни данни, без да оставят следа.

- Breach,представена през 2013 година, използва HTTP компресия, за да експлоатира HTTPS. Клиентите и сървърите трябва да използват защита от фалшифициране на заявки между сайтове, за да заобиколят уязвимостта.

- Poodle - Атаката Padding Oracle On Downgraded Legacy Encryption (POODLE) e публикувана през октомври 2014 г. и се възползва от два фактора. Първият е фактът, че някои сървъри/клиенти все още поддържат SSL 3.0 за оперативна съвместимост и съвместимост с наследени системи. Вторият фактор е уязвимост, която съществува в SSL 3.0, свързана със запълване на блокове(block padding).

Клиентът инициира "ръкостискането" и изпраща списък с поддържани SSL/TLS версии. Нападателят прихваща трафика, извършвайки атака Man in the Middle (MITM) и се представя за сървъра, докато клиентът не се съгласи да понижи връзката до SSL 3.0.

# Предпазване от атаките

В повечето случаи най-добрият начин да се предпазите от атаки, свързани със SSL/TLS, е да деактивирате по-старите версии на протокола. Това дори е стандартно изискване за някои индустрии. Например 30 юни 2018 г. беше крайният срок за деактивиране на поддръжката за SSL и ранните версии на TLS (до и включително TLS 1.0) според стандарта за защита на данните PCI. Internet Engineering Task Force (IETF) пусна съвети относно сигурността на SSL: RFC 6176(https://datatracker.ietf.org/doc/html/rfc6176) и RFC 7568(https://datatracker.ietf.org/doc/html/rfc7568).

# Преминаване от SSL към TLS

TLS е проектиран за първи път като друго надграждане на протокола на SSL 3.0 през 1999 г. Въпреки че разликите не се считат за драматични, те са достатъчно значителни, че SSL 3.0 и TLS 1.0 да не взаимодействат. SSL 3.0 се разглежда като по-малко сигурен от TLS.

TLS 1.1 е създаден през 2006 г.
TLS 1.2 е пуснат през 2008 г.
TLS 1.3 е в чернова от януари 2015 г., като бива пуснат през 2018 г. след продължителни тестове.
Както при всяко друго надграждане на протокола, TLS се разглежда като по-сигурен от SSL 3.0 поради добавените мерки за блокиране на експлоатацията и смекчаване на уязвимостите във всяка версия.

Secure Sockets Layer (SSL) и Transport Security Layer (TLS) са протоколи, използвани за криптиране на комуникации.
Самото шифроване(SSL/TLS криптирането) е възможно поради сдвояването на публичен и частен ключ, което дигиталните сертификати улесняват. Клиентите (като уеб браузъри) получават публичния ключ, необходим за отваряне на TLS връзка от SSL сертификата на сървъра.

# Дигитални сертификати

SSL сертификатите са това, което позволява на уебсайтовете да преминават от HTTP към по-сигурният HTTPS. SSL сертификатът е файл с данни, хостван в сървъра за произход на уебсайта. SSL сертификатите правят възможно SSL/TLS криптирането и съдържат публичния ключ и самоличността на уебсайта, заедно със свързаната информация. Устройствата, които се опитват да комуникират с изходния сървър, ще препратят към този файл, за да получат публичния ключ и да проверят самоличността на сървъра. Частният ключ се пази в тайна и е сигурен.

# Защо уебсайтовете се нуждаят от SSL сертификат?

SSL сертификатът е нужен, за да запази потребителските данни защитени, да потвърди собствеността върху уебсайта, да предотврати нападателите да създадат фалшива версия на сайта и да спечели доверието на потребителите.
Удостоверяване: SSL сертификатите потвърждават, че клиентът разговаря с правилния сървър, който всъщност притежава домейна. Това помага за предотвратяване на подправянето на домейни и други видове атаки.

# Сертифициращи органи

Ако посетите уебсайта на банка и получите сертификат, подписан от друго лице, все още може да се чувствате несигурни относно сигурността на този уебсайт. Може да се притеснявате, че субектът, подписал сертификата, е измамник. Този проблем се решава от инфраструктурата на публичния ключ (PKI). PKI включва всичко необходимо за управление на цифрови сертификати и криптиране с публичен ключ.

Има няколко PKI обекта, на които можете да се доверите-​​​​сертифициращите органи (CA). Те проверяват други субекти (компании, организации, физически лица) и потвърждават, че наистина са тези, за които се представят. При такава проверка CA подписва сертификата, използвайки собствен сертификат. Сертификатът на CA се нарича основен сертификат.

Основните сертификати на всички CA (и техните публични ключове) се считат за доверени. Те са инсталирани във всички браузъри като Chrome, Firefox и Edge и в операционнич§ системи (включително Windows). Популярните CA включват IdenTrust, Comodo, DigiCert, GoDaddy, GlobalSign и Symantec. В момента има повече от 200 основни сертификата, на които браузърите се доверяват.

# HTTPS protocol

HTTPS: HTTPS е сигурната форма на HTTP, а HTTPS уебсайтовете са уебсайтове, чиито трафик е криптиран чрез SSL/TLS protocol.
HTTPS (Защитен протокол за трансфер на хипертекст) се появява в URL адреса, когато уебсайтът е защитен с цифров сертификат. Подробностите за сертификата, включително издаващия орган и фирменото име на собственика на уебсайта, могат да се видят, като щракнете върху символа за заключване в лентата на браузъра.
В допълнение към осигуряването на потребителски данни при транзит, HTTPS прави сайтовете по-надеждни от гледна точка на потребителя. Много потребители няма да забележат разликата между http:// и https:// уеб адрес, но повечето браузъри започнаха да маркират HTTP сайтовете като „незащитени“ по по-забележими начини, опитвайки се да осигурят стимул за преминаване към HTTPS и повишаване на сигурността.

// демо

Като много кратко демо съм замислил вдигането на два идентични ноуд базирани сървъра локално на машината ми.
Разликата ще бъде, че единият работи на обикновен HTTP протокол, а вторият ще използва HTTPS, чрез reversed nginx proxy.

Използвани ресурси:
https://www.acunetix.com/blog/articles/tls-security-what-is-tls-ssl-part-1/
https://www.acunetix.com/blog/articles/history-of-tls-ssl-part-2/
https://www.acunetix.com/blog/articles/tls-ssl-terminology-basics-part-3/
https://www.acunetix.com/blog/articles/tls-ssl-certificates-part-4/
https://www.acunetix.com/blog/articles/establishing-tls-ssl-connection-part-5/
https://www.acunetix.com/blog/articles/tls-vulnerabilities-attacks-final-part/
https://learning.oreilly.com/videos/ssl-complete-guide/9781839211508/
