import $ from 'jquery';
import rc4 from './index';

$('#encrypt').click(function () {
    let ip=$('#input').val();
    let type=$('input[name=algo]:checked').val();
    let cipher=rc4(type,'secretKey');
    let d=cipher.encodeString(ip);
    $('#output').html(d);
    console.log(ip,type,d);
});

$('#decrypt').click(function () {
    let ip=$('#dec_in').val();
    let type=$('input[name=algo]:checked').val();
    let cipher=rc4(type,'secretKey');
    let e=cipher.decodeString(ip);
    $('#dec_out').html(e);
    console.log(ip,type,e);
});