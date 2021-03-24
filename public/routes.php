<?php
echo shell_exec('cd files/ && find . -type f -iname "*.vue" | sort');
?>
