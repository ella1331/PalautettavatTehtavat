using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ekaGraafinen
{
    public partial class LomakeFM : Form
    {
        public LomakeFM()
        {
            InitializeComponent();
        }

        private void LomakeFM_Load(object sender, EventArgs e)
        {

        }

        private void painikeBT_Click(object sender, EventArgs e)
        {
            OtsikkoLB.Text = "Heippa Maailma";
        }
    }
}
